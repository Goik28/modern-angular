import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

   protected title = "This is sparta!!";
   protected isDisabled = false;
   protected count = signal(0);
   protected doubleCount = computed(()=> this.count() * 2)
   private readonly countLog = effect(()=>{{ console.log("Count changed:", this.count())}});

   protected onClick(){
    this.isDisabled = !this.isDisabled;
   }

   protected increaseCounter(){
    this.count.update(value => value + 1);
   }

   protected decreaseCounter(){
    this.count.update(value => value - 1);
   }

   protected resetCounter(){{
    this.count.set(0);
   }}
}
