// 클라이언트와 직접 통신을 하는 하나의 퍼사드 인터페이스를 두고 나머지는 숨기는 패턴

class Kitchen{
    cookBurger(){
        console.log('cook burger')
    }
    cookSide(){
        console.log('cook side')
    }
    prepareDrinks(){
        console.log('porepare Drinks')
    }
}

class FoodService{
    serve(){
        console.log('order ready!!')
    }
}

class RestaurantFacade{
    newOrder(){
        const kitchen = new Kitchen();
        kitchen.cookBurger()
        kitchen.cookSide()
        kitchen.prepareDrinks()
        const foodService = new FoodService();
        return foodService.serve()
    }
}

const facade = new RestaurantFacade().newOrder()