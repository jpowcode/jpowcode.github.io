for file in *.jpg; 
do convert $file -quality 80 small-$file;
done
