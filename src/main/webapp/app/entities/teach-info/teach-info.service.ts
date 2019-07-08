import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITeachInfo } from 'app/shared/model/teach-info.model';

type EntityResponseType = HttpResponse<ITeachInfo>;
type EntityArrayResponseType = HttpResponse<ITeachInfo[]>;

@Injectable({ providedIn: 'root' })
export class TeachInfoService {
  public resourceUrl = SERVER_API_URL + 'api/teach-infos';

  constructor(protected http: HttpClient) {}

  create(teachInfo: ITeachInfo): Observable<EntityResponseType> {
    return this.http.post<ITeachInfo>(this.resourceUrl, teachInfo, { observe: 'response' });
  }

  update(teachInfo: ITeachInfo): Observable<EntityResponseType> {
    return this.http.put<ITeachInfo>(this.resourceUrl, teachInfo, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITeachInfo>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITeachInfo[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
