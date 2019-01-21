# /bin/bash
for file in *.json
do

collection=${file/.json/ }
	# echo $collection
	# echo $file

	mongoimport --db tienda --collection $collection --file $file --jsonArray

done
