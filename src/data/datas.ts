export interface dataType {
    id:number
    name:string
    posts:number
}

export const datas= (category:string):dataType[]=>{
    switch(category){
        case "All":
            return [
                {id:1, name:"iPhone", posts:90},
                {id:2, name:"Android", posts:80},
                {id:3, name:"Samsung", posts:70},
                {id:4, name:"Sony", posts:60},
                {id:5, name:"Apple", posts:50},
                {id:6, name:"HTC", posts:40},
                {id:7, name:"ASUS", posts:30},
                {id:8, name:"DELL", posts:20},
                {id:9, name:"IBM", posts:10},
            ];
        case "F":
            return [
                {id:1, name:"F", posts:34},
            ]
        case "T":
            return [
                {id:1, name:"Lenovo", posts:42},
                {id:2, name:"Amazon", posts:34},
            ]
        default:
            return [];
    }
}