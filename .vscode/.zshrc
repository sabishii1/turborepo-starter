# https://unix.stackexchange.com/questions/559864/zsh-source-command-doesnt-reload-functions
export vscode_project_root="$(realpath $(dirname "$0")/..)"

: ${has_been_sourced:=false}

function source_vscode() {
  source "$vscode_project_root/.vscode/.zshrc"
}

function load_env() {
  env_files=("$vscode_project_root/.env" "$vscode_project_root/.env.local")

  for env_file in ${env_files[@]}; do
    if [[ -f "$env_file" ]]; then
      export env_file
      set -o allexport
      source "$env_file"
      set +o allexport
    else
      unset env_file
    fi
  done
}

function load_functions() {
  functions_dir="$vscode_project_root/.vscode/functions"
  if [[ -d "$functions_dir" ]]; then
    export functions_dir
    fpath=($fpath $functions_dir)
    typeset -U fpath
    for function_path in "$functions_dir"/*; do
      function_name=$(basename $function_path)
      unfunction $function_name &>/dev/null
      autoload -Uz $function_name
      if [[ "$has_been_sourced" != "true" ]]; then echo "Loaded function: \"$function_name\""; fi
    done
  else
    unset functions_dir
  fi
}

function init_once() {
  if [[ "$has_been_sourced" == "true" ]]; then return; fi
  nvm use lts/gallium
}

alias source_vscode="source_vscode"
alias load_env="load_env"
alias load_functions="load_functions"

# load_env
load_functions
init_once

has_been_sourced="true"

###### PROJECT SPECIFIC ######

# pnpm helpers
alias n='pnpm'
alias ni='pnpm install'
alias nw='pnpm --filter'
alias ne='pnpm exec'
alias plx="pnpm dlx"

alias nip='NODE_ENV=production pnpm install'
alias nt='pnpm exec turbo'
alias yl="pnpm exec yl"
alias nic="find_rm node_modules dist coverage _isolated_ tmp out .nuxt .output *.log .turbo && pnpm install"

# package.json scripts
alias dev='pnpm run dev'
alias format='pnpm run format'
alias lint='pnpm run lint'
alias test='pnpm run test'
alias test:e2e='pnpm run test:e2e'
alias build='pnpm run build'
alias start='pnpm run start'

# helpers
alias clean="find_rm node_modules dist coverage _isolated_ tmp out .nuxt .output *.log .turbo generated"
alias cleanm="find_rm node_modules"
alias cleanb="find_rm dist coverage _isolated_ tmp out .nuxt .output *.log .turbo"
alias prisma="nw prisma prisma"

# nuxt3
alias app:prod="nw app install && nw app build && cleanm && NODE_ENV=production nw app install && NODE_ENV=production nw app start"

# export GOOGLE_APPLICATION_CREDENTIALS="$(eval echo ~$USER)/yabailive-prod-firebase-adminsdk-anclu-2cd64df3c5.json"
export GOOGLE_APPLICATION_CREDENTIALS="$vscode_project_root/GOOGLE_APPLICATION_CREDENTIALS.json"
