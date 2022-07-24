#!/bin/bash
# script to set flags for buildscripts
# This file is only relevant for people that want to rebuild firmwares by themselves. Make sure that you use the correct script

echo "j62cebaffa8c31" > jobid
touch s6
touch installer
touch devicetype
echo "roborock.vacuum.[s|t]6" > devicetype
touch devicetypealias
echo "s6" > devicetypealias
touch authorized_keys_id
echo "" > authorized_keys_id
touch anonymous
echo "62cebaffa8c38" > anonymous
touch diff
touch tools
touch fixresets
touch installer
