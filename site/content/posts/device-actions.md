+++
categories = []
date = 2022-04-06T08:51:59Z
description = ""
series = []
tags = []
title = "Device Actions"
toc = true

+++
* Make `~/z5206677` directory
* Install wget, curl, htop
* Install ZeroTier
  * Client ID: `c5a9b2380f`
  * Network ID: `abfd31bd47e18e42`
  * IP: `10.147.20.24`

# ZT

install.zerotier.com's certificate issued by '/C=GB/ST=Greater Manchester/L=Salford/O=Sectigo Limited/CN=Sectigo RSA Domain Validation Secure Server CA'

Device doesn't have cert

    *** ZeroTier Service Quick Install for Unix-like Systems
    
    *** Tested OSes / distributions:
    
    ***   MacOS (10.13+) (just installs ZeroTier One.pkg)
    ***   Debian Linux (7+)
    ***   RedHat/CentOS Linux (6+)
    ***   Fedora Linux (16+)
    ***   SuSE Linux (12+)
    ***   Mint Linux (18+)
    
    *** Supported architectures vary by OS / distribution. We try to support
    *** every system architecture supported by the target.
    
    *** Please report problems to contact@zerotier.com and we will try to fix.
    
    *** Detecting Linux Distribution
    
    *** Found Ubuntu, creating /etc/apt/sources.list.d/zerotier.list
    gpg: key 23E52A61 was created 1464901287 seconds in the future (time warp or clock problem)
    gpg: key 23E52A61 was created 1464901287 seconds in the future (time warp or clock problem)
    gpg: key 23E52A61 was created 1464901287 seconds in the future (time warp or clock problem)
    gpg: key 23E52A61 was created 1464901287 seconds in the future (time warp or clock problem)
    OK
    
    *** Installing zerotier-one package...
    Ign http://us.ports.ubuntu.com trusty InRelease                     
    Hit http://ppa.launchpad.net trusty InRelease                       
    Get:1 http://download.zerotier.com trusty InRelease [14.0 kB]           
    Hit http://us.ports.ubuntu.com trusty-updates InRelease                        
    Hit http://us.ports.ubuntu.com trusty-security InRelease                       
    Get:2 http://download.zerotier.com trusty/main armhf Packages [4935 B]         
    Hit http://us.ports.ubuntu.com trusty Release.gpg                              
    Hit http://ppa.launchpad.net trusty/main armhf Packages               
    Hit http://us.ports.ubuntu.com trusty-updates/main Sources                     
    Hit http://us.ports.ubuntu.com trusty-updates/restricted Sources               
    Hit http://ppa.launchpad.net trusty/main Translation-en                        
    Hit http://us.ports.ubuntu.com trusty-updates/main armhf Packages 
    Hit http://us.ports.ubuntu.com trusty-updates/restricted armhf Packages 
    Hit http://us.ports.ubuntu.com trusty-updates/main Translation-en  
    Hit http://us.ports.ubuntu.com trusty-updates/restricted Translation-en
    Hit http://us.ports.ubuntu.com trusty-security/main Sources
    Ign http://download.zerotier.com trusty/main Translation-en
    Hit http://us.ports.ubuntu.com trusty-security/restricted Sources
    Hit http://us.ports.ubuntu.com trusty-security/main armhf Packages
    Hit http://us.ports.ubuntu.com trusty-security/restricted armhf Packages
    Hit http://us.ports.ubuntu.com trusty-security/main Translation-en
    Hit http://us.ports.ubuntu.com trusty-security/restricted Translation-en
    Hit http://us.ports.ubuntu.com trusty Release
    Hit http://us.ports.ubuntu.com trusty/main Sources  
    Hit http://us.ports.ubuntu.com trusty/restricted Sources
    Hit http://us.ports.ubuntu.com trusty/main armhf Packages
    Hit http://us.ports.ubuntu.com trusty/restricted armhf Packages
    Hit http://us.ports.ubuntu.com trusty/multiverse armhf Packages
    Hit http://us.ports.ubuntu.com trusty/universe armhf Packages
    Hit http://us.ports.ubuntu.com trusty/main Translation-en                      
    Hit http://us.ports.ubuntu.com trusty/multiverse Translation-en                
    Hit http://us.ports.ubuntu.com trusty/restricted Translation-en                
    Hit http://us.ports.ubuntu.com trusty/universe Translation-en                  
    Fetched 18.9 kB in 18s (997 B/s)                                               
    Reading package lists... Done
    W: Ignoring Provides line with DepCompareOp for package gdb-minimal
    W: You may want to run apt-get update to correct these problems
    Reading package lists... Done
    Building dependency tree       
    Reading state information... Done
    The following extra packages will be installed:
      iproute
    The following NEW packages will be installed:
      iproute zerotier-one
    0 upgraded, 2 newly installed, 0 to remove and 123 not upgraded.
    Need to get 793 kB of archives.
    After this operation, 2591 kB of additional disk space will be used.
    Get:1 http://us.ports.ubuntu.com/ubuntu-ports/ trusty-updates/main iproute all 1:3.12.0-2ubuntu1.2 [2394 B]
    Get:2 http://download.zerotier.com/debian/trusty/ trusty/main zerotier-one armhf 1.8.7 [791 kB]
    Fetched 793 kB in 1s (554 kB/s)     
    W: Ignoring Provides line with DepCompareOp for package gdb-minimal
    Selecting previously unselected package iproute.
    (Reading database ... 14990 files and directories currently installed.)
    Preparing to unpack .../iproute_1%3a3.12.0-2ubuntu1.2_all.deb ...
    Unpacking iproute (1:3.12.0-2ubuntu1.2) ...
    Selecting previously unselected package zerotier-one.
    Preparing to unpack .../zerotier-one_1.8.7_armhf.deb ...
    Unpacking zerotier-one (1.8.7) ...
    Processing triggers for ureadahead (0.100.0-16) ...
    Setting up iproute (1:3.12.0-2ubuntu1.2) ...
    Setting up zerotier-one (1.8.7) ...
    zerotier-one start/running, process 12055
    Processing triggers for ureadahead (0.100.0-16) ...
    W: Ignoring Provides line with DepCompareOp for package gdb-minimal
    W: You may want to run apt-get update to correct these problems
    
    *** Enabling and starting ZeroTier service...
    update-rc.d: warning: default stop runlevel arguments (0 1 6) do not match zerotier-one Default-Stop values (none)
     Adding system startup for /etc/init.d/zerotier-one ...
       /etc/rc0.d/K20zerotier-one -> ../init.d/zerotier-one
       /etc/rc1.d/K20zerotier-one -> ../init.d/zerotier-one
       /etc/rc6.d/K20zerotier-one -> ../init.d/zerotier-one
       /etc/rc2.d/S20zerotier-one -> ../init.d/zerotier-one
       /etc/rc3.d/S20zerotier-one -> ../init.d/zerotier-one
       /etc/rc4.d/S20zerotier-one -> ../init.d/zerotier-one
       /etc/rc5.d/S20zerotier-one -> ../init.d/zerotier-one
     * Starting ZeroTier One zerotier-one
       ...done.
    
    *** Waiting for identity generation...
    
    *** Success! You are ZeroTier address [ c5a9b2380f ].

## Version Gotcha

Latest working is 1.8.1

Else you get this error [\[1\]](https://github.com/zerotier/ZeroTierOne/issues/1314) [\[2\]](https://github.com/zerotier/ZeroTierOne/blob/e4404164bd9eb14c91906ec3cf577ba98eb24b8a/osdep/LinuxEthernetTap.cpp#L223-L229)

# TODO

Dump cert list and compare

Dump CA cert list and compare

View running services

View running processes