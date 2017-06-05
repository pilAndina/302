import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class TasksSqliteProvider {

  database: SQLiteObject = null;

  constructor() {
    console.log('Hello TasksSqliteProvider Provider');
  }

  setDatabase(database){
    if(this.database === null){
      this.database = database;
    }
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
    return this.database.executeSql(sql, []);
  }

  getAll(){
    let sql = 'SELECT * FROM tasks';
    return this.database.executeSql(sql, [])
    .then(response =>{
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
      }
      return Promise.resolve(tasks);
    })
    .catch(error => Promise.reject(error) )
  }

  create(task){
    let sql = 'INSERT INTO tasks(title, completed) VALUES(?,?)';
    return this.database.executeSql(sql, [task.title, task.completed])
  }

  update(task){
    let sql = 'UPDATE tasks SET title=?, completed=? WHERE id=?';
    return this.database.executeSql(sql, [task.title, task.completed, task.id]);
  }

  delete(id: number){
    let sql = 'DELETE FROM tasks WHERE id=?';
    return this.database.executeSql(sql, [id]);
  }

}
