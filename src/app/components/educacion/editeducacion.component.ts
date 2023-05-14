import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css'],
})

export class EditeducacionComponent implements OnInit {

  educacion!: Educacion;
//educacion: Educacion = null;
  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {   
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.details(id).subscribe(data => {
      this.educacion = data;
    }, (err: any) => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar la educación");
      this.router.navigate(['']);
    })
  }
}