FROM leontius/ros:kinetic-perception-xenial

RUN apt-get update && apt-get install --no-install-recommends -y \
    ros-kinetic-diagnostics \
    ros-kinetic-roslint \
    && rm -rf /var/lib/apt/lists/*

# create data
RUN mkdir /data

# copy hokuyo to home
COPY ./spin-hokuyo_ws /home/spin-hokuyo_ws

ARG ROS_PACKAGE_PATH=/opt/ros/kinetic
RUN cd /home/spin-hokuyo_ws && \
    /bin/bash -c "source devel/setup.bash ;\
		  source $ROS_PACKAGE_PATH/setup.bash ;\
		  catkin_make -j1"

# setup entrypoint
ENV HOKUYO_ENV=spin-hokuyo_ws/devel
COPY ./hokuyo_entrypoint.sh /hokuyo_entrypoint.sh

WORKDIR /home
ENTRYPOINT ["/hokuyo_entrypoint.sh"]
CMD ["bash"]
