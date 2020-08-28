import {toDos} from "./initToDoLists";
import {menuListDOM} from "./menuListDOM"
import { taskListDOM } from "./taskListDOM";

function init(){

    toDos.setLocalStorage(toDos.projectList)
    menuListDOM()
    taskListDOM()
}

init()