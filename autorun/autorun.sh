#!/bin/sh /etc/rc.common
# authors:  https://github.com/artynet
#			https://github.com/quasto

#	
#	Ideino is based on Noide project by Dave Stone https://github.com/davidjamesstone/noide. 
#	Ideino https://github.com/ideino/ideino-linino-dist is released under the MIT License:
#	
#   Copyright (C) 2014 by Ideino
#
#

export PATH=/usr/bin:/bin:/sbin:/opt/usr/bin
AUTODIR=/opt/ideino-linino/autorun
CONFIG_FILE=/opt/ideino-linino/autorun/autorun.conf
AUTOCONF=autorun.conf

if [ -f $CONFIG_FILE ]
then	
	. $CONFIG_FILE

	if [ -d "$1" ] && [ -e "$1""$2" ]
	then
		###STOPPING AUTORUNNING PROCESS IF EXISTS		
		if [ $IDEINOAPPPID ]
		then
			echo 'Stopping current autorunning process...'
			sleep 2
			kill -9 $IDEINOAPPPID
			sed -i -e "s/IDEINOAPPPID=${IDEINOAPPPID}/IDEINOAPPPID=/g" $CONFIG_FILE
			echo 'Current autorunning process stopped!'	
			echo ''
		fi
		
		###CLEANING AUTORUN DIR		
		echo 'Cleaning autorun directory...'
		ls -R $AUTODIR | awk '/:$/&&f{s=$0;f=0}/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}NF&&f{ print s"/"$0 }' | grep -v autorun.sh | grep -v $AUTOCONF | xargs rm -rf;
		sleep 3
		echo 'Autorun directory cleaned!'	
		echo ''
		
		###COPING SOURCE DIR TO AUTORUN DIR		
		echo 'Copying '`basename "$1"`' project directory into autorun directory...'
		cp -r "$1" $AUTODIR ;
		sleep 3
		echo `basename "$1"`' project directory copied !'
		echo ''
		
		###UPDATING CONFIGURATION FILE WITH NEW STARTUP NODE APPLICATION
		#echo $1
		#echo $2		
		NAME=$AUTODIR"/"`basename "$1"`"$2"
		#NAME=$AUTODIR"/""$1""$2"
		pwdesc2=$(echo $NAME | sed 's_/_\\/_g')
		pwdesc1=$(echo $IDEINOAPP | sed 's_/_\\/_g')
		sed -i -e "s/IDEINOAPP=${pwdesc1}/IDEINOAPP=${pwdesc2}/g" $CONFIG_FILE
		sleep 3
		echo `basename $2`' will run automatically at next startup!'
	fi

fi
