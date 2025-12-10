#/bin/bash
clear
echo  "Digite um número:"
read NUM
if [ $NUM -gt 0 ]; then
echo "o numero e positivo"
elif [ $NUM -lt 0]; then
echo "o numero e negativo"
else
echo "o numero é zero"
fi
