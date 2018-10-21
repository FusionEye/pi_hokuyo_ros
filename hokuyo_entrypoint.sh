#!/bin/bash
set -e

# setup hokuyo environment
echo 'source "/home/$HOKUYO_ENV/setup.bash"' >> /root/.bashrc
exec "$@"
