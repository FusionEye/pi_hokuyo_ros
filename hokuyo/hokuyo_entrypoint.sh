#!/bin/bash
set -e

# setup hokuyo environment
echo 'source "/home/$HOKUYO_ENV/setup.bash"' >> /root/.bashrc
source /home/$HOKUYO_ENV/setup.bash
nohup roslaunch spin_hokuyo tilt_continuous.launch &
python /home/steak-restful-api/run.py
exec "$@"
