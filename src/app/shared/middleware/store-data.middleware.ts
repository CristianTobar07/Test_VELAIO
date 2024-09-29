import { Task } from '../../pages/new-task/models';

export const saveDataStorage = (keyName: string,products: Task[]) => {
  localStorage.setItem(`@${keyName}`, JSON.stringify(products));
};
