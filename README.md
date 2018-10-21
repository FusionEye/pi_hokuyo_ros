# hokuyo_ros

workdir: /home/spin-hokuyo_ws  
volumes: /data

#### docker-compose startup
``` shell
$ docker-compose up -d
```

#### docker-compose containers uninstall
``` shell
$ docker-compose down
```

#### list containers
``` shell
$ docker ps -a
```

#### attach in a running container
``` shell
$ docker exec -it hokuyo_ros /bin/bash
```
------------------------------------------------

#### hokuyo launch start
``` shell
$ roslaunch /spin-hokuyo_ws/src/spin_hokuyo-master/launch/tilt_continuous.launch  
```

#### list ros topic
``` shell
$ rostopic list -v  
```

#### record a bag file with the contents of specified topics.
``` shell
$ rosbag record -a 
```

#### play back the contents of one or more bag files.
``` shell
$ rosbag play xxx.bag
```
