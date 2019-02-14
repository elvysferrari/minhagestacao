import { UserService } from './../../services/user.service';

import { Component, OnInit } from '@angular/core';
import { CategoryTemplateService } from 'src/app/services/category-template.service';
import { CategoryServiceTemplate } from 'src/app/models/category-service-template';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  private categoriesTemplate: CategoryServiceTemplate[];
  constructor(private _categoryService: CategoryTemplateService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.categoriesTemplate = this._categoryService.getAllCategories();

  }
  clickItem(category: CategoryServiceTemplate){
    //this.router.navigateByUrl('/categories/' + category.id);
    let user = new User;
    user.email = 'elvys.ferrari@gmail.com'
    user.name = 'Elvys Ferrari'
    user.password = '123456'
    this.userService.createUser(user).then((result) => {
      console.log('createUser', result)
    })
  }
}
