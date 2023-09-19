import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RoutingVariables } from "../variables/routing-variables";

@Injectable()
export class NavigationService{

constructor(private router:Router){

}
public navigateToLogin():void{
    this.router.navigateByUrl(RoutingVariables.LOGIN_FEATURE);
}
public navigateToRegister():void{
    this.router.navigateByUrl('register');
}
public navigateToProfile(id:string):void{
    this.router.navigateByUrl(`profile/${id}`)
}
}