// 일일히 객체 생성하지 않고 하나의 인터페이스로 여러 다른 오브젝트 만들수 잇음
// 실무에서도 많이 쓰이는 패턴임
class Shoe{
    constructor(attrs) {
        this._attrs = attrs || []
    }
    getName(){
        return this._attrs['name']
    }
    getSize(){
        return this._attrs['size']
    }
    getBrand(){
        return this.constructor['size']
    }
}

class Nike extends Shoe {}
class Puma extends Shoe {}
class Adidas extends Shoe{}

const data = [
    {type:'Nike', attrs:{name:'SB', size:300}}
]

class ShoeFactory{
    typeMap = {
        nike:Nike,
        puma:Puma,
        adidas:Adidas
    }
    create(props){
        try{
            const Brand = this.typeMap[props?.type?.toLowerCase()];
            return new Brand(props.attrs);
        }catch (e){
            console.error('error creating!!')

        }
    }
}
const factory = new ShoeFactory()
const nike = factory.create(data[0])
console.log(nike.getName())
