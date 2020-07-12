# this script is used to create .env files filled with necessary host data as
# a prerequisit for starting environmensts

# map host user and group for Linux users (Docker user and group is not same on host and inside container)
curent_user="$(id -u)"
curent_group=$(id -g)
# get project dir name to prefix container names with it
parent_dir_url="$(cd ../; pwd)"
parent_dir_name="${parent_dir_url##*/}"
# get system info
sysname="$(uname -s)"
# act according to system info
case "${sysname}" in
  Darwin*)
    if [ ! -f ./local/.env ]; then
      echo "PROJECT_PREFIX=${parent_dir_name}_local" >> ./local/.env
      echo "USER_ID=1000" >> ./local/.env
      echo "GROUP_ID=1000" >> ./local/.env
    fi
    ;;
esac

case "${sysname}" in
  Linux*)
    if [ ! -f ./local/.env ]; then
      echo "PROJECT_PREFIX=${parent_dir_name}_local" >> ./local/.env
      echo "USER_ID=$curent_user" >> ./local/.env
      echo "GROUP_ID=$curent_group" >> ./local/.env
    fi

    if [ ! -f ./production/.env ]; then
        echo "PROJECT_PREFIX=${parent_dir_name}_production" >> ./production/.env
        echo "USER_ID=$curent_user" >> ./production/.env
        echo "GROUP_ID=$curent_group" >> ./production/.env
    fi
    ;;
esac