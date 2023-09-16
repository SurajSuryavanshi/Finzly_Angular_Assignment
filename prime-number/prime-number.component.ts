import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.css']
})
export class PrimeNumberComponent implements OnInit {
  result:any=null;

  constructor() { }

  ngOnInit(): void {
  }

  onPrime(num:any){
    let n = +num;
  if (n <= 1) {
    this.result = "Number is not prime";
  } else {
    let isPrime = true; // Assume the number is prime initially
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        isPrime = false; // Found a factor, so it's not prime
        break; // No need to continue checking
      }
    }
    if (isPrime) {
      this.result = "Number is prime";
    } else {
      this.result = "Number is not prime";
    }
  }
}

}