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

RUN apt-get update && \
    apt-get install -y \
    libxml2-dev \
    libxslt-dev \
    python-dev \
    wget \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install pip, numpy & cython python2&3
RUN wget --quiet https://bootstrap.pypa.io/get-pip.py && \
    python3 get-pip.py && \
    pip3 install --upgrade pip
COPY pip.conf /root/.pip/pip.conf

RUN python2 get-pip.py && \
    rm get-pip.py
RUN pip2 install --upgrade pip

# setup entrypoint
ENV HOKUYO_ENV=spin-hokuyo_ws/devel
COPY ./hokuyo_entrypoint.sh /hokuyo_entrypoint.sh

WORKDIR /home
ENTRYPOINT ["/hokuyo_entrypoint.sh"]
CMD ["bash"]
EXPOSE 5000
