
/**
 *  interface: related to CoreModel's lifecycle (e.g. cleanup)
 */
export interface ICoreModelLifeCycle {
  /**
   *  method to clean up the data set inside
   *    the CoreModel (sort of cleaning up); this method
   *    could be handy when you need to free up memory with
   *    non-used data
   */
  cleanupDataBasedOnKey(_key:string):any;

}
