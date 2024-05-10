import { getBase64Encoder } from '@solana/web3.js';
import test from 'ava';
import { Mint, getMintDecoder } from '../../src';

test('it decodes a mint account with extensions', (t) => {
  // Given
  const encodedData = getBase64Encoder().encode(
    'AQAAANl0oyyj5Em8hjtu2ZP7yo0ugblRsz6hhVJdNo+gAaxzAAAAAAAAAAAJAQEAAADZdKMso+RJvIY7btmT+8qNLoG5UbM+oYVSXTaPoAGscwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQMAIADZdKMso+RJvIY7btmT+8qNLoG5UbM+oYVSXTaPoAGscwwAIADZdKMso+RJvIY7btmT+8qNLoG5UbM+oYVSXTaPoAGscwoANADZdKMso+RJvIY7btmT+8qNLoG5UbM+oYVSXTaPoAGsc1DcOGYAAAAABQBQ3DhmAAAAAAUACQAAAAYAAQABAQBsANl0oyyj5Em8hjtu2ZP7yo0ugblRsz6hhVJdNo+gAaxz2XSjLKPkSbyGO27Zk/vKjS6BuVGzPqGFUl02j6ABrHMAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAKAAAAAAAAAAAACwAAAAAAAAAKAAQAQQDZdKMso+RJvIY7btmT+8qNLoG5UbM+oYVSXTaPoAGscwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAgQDZdKMso+RJvIY7btmT+8qNLoG5UbM+oYVSXTaPoAGsc8aZ/4AJIGfAaE/AWw0sZ/RHrzKkiqDImFjw8aaO6XQnAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAEAA2XSjLKPkSbyGO27Zk/vKjS6BuVGzPqGFUl02j6ABrHNFibyKrwttzJMtAoI/rBUOm1A6+Qq/H88Um0qCtkB4bhIAQADZdKMso+RJvIY7btmT+8qNLoG5UbM+oYVSXTaPoAGsc0WJvIqvC23Mky0Cgj+sFQ6bUDr5Cr8fzxSbSoK2QHhuFABAANl0oyyj5Em8hjtu2ZP7yo0ugblRsz6hhVJdNo+gAaxzRYm8iq8LbcyTLQKCP6wVDptQOvkKvx/PFJtKgrZAeG4WAEAA2XSjLKPkSbyGO27Zk/vKjS6BuVGzPqGFUl02j6ABrHNFibyKrwttzJMtAoI/rBUOm1A6+Qq/H88Um0qCtkB4bhMAjQDZdKMso+RJvIY7btmT+8qNLoG5UbM+oYVSXTaPoAGsc0WJvIqvC23Mky0Cgj+sFQ6bUDr5Cr8fzxSbSoK2QHhuCQAAAE1lZ2FUb2tlbgIAAABNVCEAAABodHRwczovL3NwbC5zb2xhbmEuY29tL3Rva2VuLTIwMjIBAAAABAAAAE1lZ2EFAAAAVG9rZW4VAEgA2XSjLKPkSbyGO27Zk/vKjS6BuVGzPqGFUl02j6ABrHNFibyKrwttzJMtAoI/rBUOm1A6+Qq/H88Um0qCtkB4bgAAAADoAwAA'
  );

  // When
  const decodedData = getMintDecoder().decode(encodedData);

  // Then
  t.like(decodedData, <Mint>{
    supply: 0n,
    // extensions: [],
  });
});