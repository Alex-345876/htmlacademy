import TasksApiService from './mock/tasks-api-service.js';
import TasksModel from './model/tasks-model.js';
import FilterModel from './model/filter-model.js';
import NewTaskButtonView from './view/new-task-button-view.js';
import {render} from './framework/render.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

const tasksModel = new TasksModel({
  tasksApiService: new TasksApiService()
});
const filterModel = new FilterModel();
const boardPresenter = new BoardPresenter({
  boardContainer: siteMainElement,
  tasksModel
});
const filterPresenter = new FilterPresenter({
  filterContainer: siteMainElement,
  filterModel,
  tasksModel
});

render(new NewTaskButtonView(), siteHeaderElement);

filterPresenter.init();
boardPresenter.init();
tasksModel.init();
