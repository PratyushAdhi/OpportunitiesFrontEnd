import { Injectable , Injector} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { identifierModuleUrl } from '@angular/compiler';
import { serialize } from 'object-to-formdata';

@Injectable({
  providedIn: 'root'
})
export class DetailserviceService {
  id : ""
  base_url = "http://127.0.0.1:8000/details/"
  create_url = this.base_url + 'create/'
  token = localStorage.getItem('token')
  // httpHeaders = new HttpHeaders()
  httpHeaderNormal = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Content-Disposition'
    'Accept': 'application/json',
    'Authorization': `Bearer: ${this.token}`
  })
  httpHeaders = new HttpHeaders({
    'Content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    'Authorization': `Bearer: ${this.token}`
  });

  formData = new FormData();

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private injector: Injector) { };

  getDetail(id: number): Observable<any> {
    console.log(id);
    return this.http.get(this.base_url + id + "/")
  }

  buildFormData(data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob)) {
      Object.keys(data).forEach(key => {
        this.buildFormData(data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;
  
      this.formData.append(parentKey, value);
    }
  }

  updateDetail(detail, logo, gallery, id): Observable<any> {
    
    const endpoint = this.base_url + id + "/";
    const image_endpoint = this.base_url + "image/" + id + "/";
    // if(fileToUpload){
    //   let formData = new FormData();
    //   formData.append('logo', fileToUpload, fileToUpload.name)
    //   this.http.put(image_endpoint, formData).subscribe(
    //     data => {console.log(data)},
    //     error => {console.log(error)}
    //   )
    // }
    console.log(detail);
    let formData = new FormData();
    if(logo){
      formData.append('logo', logo, logo.name);
    }
    if(gallery.length){
      for(var i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        formData.append("gallery", gallery[i], gallery[i].name)
      }
    }
    if (logo || gallery) {
      this.http.put(image_endpoint,formData).subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
    return this.http.put(endpoint, detail, {headers: this.httpHeaderNormal});
  }


  // postFile(fileToUpload: File, formData: FormData): Observable<boolean> {
  //   const endpoint = ;
  //   formData.append('my-input', fileToUpload, fileToUpload.name);
  //   return this.http.put(endpoint, formData, { headers: this.httpHeaders})
  //     .map(() => { return true; })
  //     .catch((e) => console.log(e)); 
  // }

//   postFile(fileToUpload: File): Observable<boolean> {
//     const endpoint = 'your-destination-url';
//     const formData: FormData = new FormData();
//     formData.append('logo', fileToUpload, fileToUpload.name);
//     return this.http.post(endpoint, formData, { headers: this.httpHeaders })
// }

}
