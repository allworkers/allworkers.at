!#/bin/bash

clean(){
    rm -rf docs dist
} 

build(){
    npm run build
    mv dist docs
}

upload(){
    git add .
    git commit -m $1
}

main(){
    clean
    build
    upload $1
}

main $1
