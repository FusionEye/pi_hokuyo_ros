#!/bin/bash
set -e

# setup hokuyo environment
echo 'source "/home/$HOKUYO_ENV/setup.bash"' >> /root/.bashrc
source "/opt/ros/kinetic/setup.bash"
source /root/.bashrc
nohup roscore &
python /home/steak-restful-api/run.py
exec "$@"
