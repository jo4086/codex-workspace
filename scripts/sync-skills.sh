#!/usr/bin/env bash
set -euo pipefail

# Copy named repository Skills and skill-router to ~/.agents/skills.
# Archive changed installed copies except skill-router. Use --force-router to
# replace an identical installed router once without a lasting archive.
# For a safe rehearsal, override SKILL_SYNC_ACTIVE_DIR and SKILL_SYNC_ARCHIVE_DIR.

force_router=false
if [[ ${1:-} == --force-router ]]; then
  force_router=true
  shift
fi

if (( $# == 0 )) && [[ $force_router == false ]]; then
  printf 'Usage: %s [--force-router] <skill-name> [skill-name ...]\n' "$0" >&2
  exit 2
fi

repo_root=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd -P)
active_dir=${SKILL_SYNC_ACTIVE_DIR:-"$HOME/.agents/skills"}
archive_root=${SKILL_SYNC_ARCHIVE_DIR:-"$repo_root/archive/skills"}
sync_names=()
for name in "$@"; do
  if [[ $name != skill-router ]]; then
    sync_names+=("$name")
  fi
done
sync_names+=(skill-router)

for name in "${sync_names[@]}"; do
  if [[ ! $name =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
    printf 'Invalid Skill name: %s\n' "$name" >&2
    exit 2
  fi
  if [[ ! -f "$repo_root/skills/$name/SKILL.md" ]]; then
    printf 'Repository Skill is missing SKILL.md: %s\n' "$name" >&2
    exit 1
  fi
done

mkdir -p -- "$active_dir"
stage_dir=
router_restore_target=
cleanup_stage() {
  if [[ -n $stage_dir ]]; then
    if [[ -n $router_restore_target && -d $stage_dir/previous && ! -e $router_restore_target ]]; then
      mv -- "$stage_dir/previous" "$router_restore_target"
    fi
    rm -rf -- "$stage_dir"
  fi
}
trap cleanup_stage EXIT

for name in "${sync_names[@]}"; do
  source_dir="$repo_root/skills/$name"
  target_dir="$active_dir/$name"

  if [[ -L $target_dir ]]; then
    printf 'Refusing to replace a symlink: %s\n' "$target_dir" >&2
    exit 1
  fi
  if [[ -e $target_dir && ! -d $target_dir ]]; then
    printf 'Target is not a directory: %s\n' "$target_dir" >&2
    exit 1
  fi
  if [[ -d $target_dir ]] && diff -qr -- "$source_dir" "$target_dir" >/dev/null; then
    if [[ $name != skill-router || $force_router == false ]]; then
      printf 'Already identical: %s\n' "$name"
      continue
    fi
  fi

  stage_dir=$(mktemp -d -- "$active_dir/.skill-sync.XXXXXX")
  cp -a -- "$source_dir" "$stage_dir/$name"
  diff -qr -- "$source_dir" "$stage_dir/$name" >/dev/null

  if [[ -d $target_dir && $name == skill-router ]]; then
    router_restore_target=$target_dir
    mv -- "$target_dir" "$stage_dir/previous"
    if ! mv -- "$stage_dir/$name" "$target_dir"; then
      mv -- "$stage_dir/previous" "$target_dir"
      router_restore_target=
      printf 'Installation failed; restored previous Skill: %s\n' "$name" >&2
      exit 1
    fi
    router_restore_target=
    rm -rf -- "$stage_dir/previous"
  elif [[ -d $target_dir ]]; then
    timestamp=$(date +%Y%m%d-%H%M%S)
    archive_dir="$archive_root/$name/$timestamp"
    if [[ -e $archive_dir ]]; then
      printf 'Archive already exists: %s\n' "$archive_dir" >&2
      exit 1
    fi
    mkdir -p -- "$archive_root/$name"
    mv -- "$target_dir" "$archive_dir"
    if ! mv -- "$stage_dir/$name" "$target_dir"; then
      mv -- "$archive_dir" "$target_dir"
      printf 'Installation failed; restored previous Skill: %s\n' "$name" >&2
      exit 1
    fi
    printf 'Archived: %s\n' "$archive_dir"
  else
    mv -- "$stage_dir/$name" "$target_dir"
  fi

  rmdir -- "$stage_dir"
  stage_dir=
  printf 'Installed: %s\n' "$target_dir"
done
