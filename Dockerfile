FROM leontius/ros:hokuyo_ros

RUN cd /home && \
    git clone https://github.com/FusionEye/steak-restful-api.git && \
    cd steak-restful-api && \
    pip install -r requirements.txt

ENV FLASK_CONFIG=prod
