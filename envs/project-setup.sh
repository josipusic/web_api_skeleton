parent_dir=${OLDPWD##*/}
cur_user=$(id -u)
cur_group=$(id -g)

if [ ! -f ./local/.env ]; then
    echo "PROJECT_PREFIX=${parent_dir}_local" >> ./local/.env
    echo "USER_ID=$cur_user" >> ./local/.env
    echo "GROUP_ID=$cur_group" >> ./local/.env
fi

if [ ! -f ./production/.env ]; then
    echo "PROJECT_PREFIX=${parent_dir}_production" >> ./production/.env
    echo "USER_ID=$cur_user" >> ./production/.env
    echo "GROUP_ID=$cur_group" >> ./production/.env
fi