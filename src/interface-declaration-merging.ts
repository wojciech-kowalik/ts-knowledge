export interface Request {
  body: any;
}

export interface Request {
  json: any;
}

const handle = (request: Request) => {
  return {
    body: request.body,
    json: request.json,
  };
};
