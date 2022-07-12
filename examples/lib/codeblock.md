```hoon {% copy=true %}
:-  %say
|=  *
:-  %noun
=<  =~  new-account
      (deposit 100)
      (deposit 100)
      (withdraw 50)
      balance
    ==
|%
++  new-account
  |_  balance=@ud
  ++  deposit
    |=  amount=@ud
    +>.$(balance (add balance amount))
  ++  withdraw
    |=  amount=@ud
    +>.$(balance (sub balance amount))
  --
--
```