import IBlog from "./IBlog";

interface IHook {
    data: IBlog[] | null,
    isPending: boolean,
    error: Error | null;
  }

export default IHook