/**
 * Created by koyexes on 20/09/2017.
 */
import { ADD_FLASH_MESSAGE } from './types';

const addFlashMessage = (message) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
};

export default addFlashMessage;