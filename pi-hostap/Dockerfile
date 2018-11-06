FROM jonaskello/rpi-alpine-scratch-qemu

MAINTAINER Leon Zhang. <leontius@albireo@live.cn>

ENV VERSION 0.30

RUN apk update && apk add bash hostapd iptables dhcp && rm -rf /var/cache/apk/*
RUN echo "" > /var/lib/dhcp/dhcpd.leases
ADD wlanstart.sh /bin/wlanstart.sh

ENTRYPOINT [ "/bin/wlanstart.sh" ]

