function triangular(n) {
  // Function that calculates the n-th triangular number
  return (n * (n + 1)) / 2
}

function fibonacci(n) {
  if (n < 0) {
    throw new Error('The number must be greater than or equal to zero')
  }
  if (n <= 1) {
    return n
  }
  let fibNMinus2 = 0 // Initialize the value of F(n-2)
  let fibNMinus1 = 1 // Initialize the value of F(n-1)
  let fibN // Variable to store the value of F(n)
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2 // Calculate F(n) by adding the two previous values
    fibNMinus2 = fibNMinus1 // Update the values of F(n-2) and F(n-1)
    fibNMinus1 = fibN
  }
  return fibN // Return the value of F(n)
}

function isPrime(n) {
  // Function that checks if a number is prime
  if (n <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function nextPrime(n) {
  // Function that returns the next prime number after n
  while (!isPrime(n)) {
    n++
  }
  return n
}

function result(n) {
  // Function that calculates the n-th term of the series
  const t = triangular(n)
  const f = fibonacci(n)
  const p = isPrime(n + 1) ? n + 1 : nextPrime(n + 1)
  return 5 * t - 2 * f + p
}

export default result
