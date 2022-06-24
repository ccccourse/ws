# Oak 內部設計



## request

* https://github.com/oakserver/oak/blob/main/request.ts

用了很多 private 欄位，所以印不出來，也無法用 JSON.stringify 印出。

然後很多用 get, set 的存取函數，所以也無法印出。

```
export class Request {
  #body: RequestBody;
  #proxy: boolean;
  #secure: boolean;
  #serverRequest: ServerRequest;
  #url?: URL;

  /** Is `true` if the request has a body, otherwise `false`. */
  get hasBody(): boolean {
    return this.#body.has();
  }

  /** The `Headers` supplied in the request. */
  get headers(): Headers {
    return this.#serverRequest.headers;
  }
```

## response

```
export class Response {
  #body?: Body | BodyFunction;
  #headers = new Headers();
  #request: Request;
  #resources: number[] = [];
  #serverResponse?: ServerResponse;
  #status?: Status;
  #type?: string;
  #writable = true;

  #getBody = async (): Promise<Uint8Array | Deno.Reader | undefined> => {
    const [body, type] = await convertBody(this.body, this.type);
    this.type = type;
    return body;
  };
  ...
```