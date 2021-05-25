Feature: Shopping Basket

  Scenario: Client checks the contents of shopping basket
    Given customer adds 2 units of "The Hobbit" to the shopping basket
    And customer add 5 units of "Breaking Bad" to the shopping basket
    When customer checks the shopping basket
    Then the shopping basket should contain
        | 2020-05-25                             |
        | 2 x The Hobbit // 2 x 5.00 = £10.00    |
        | 5 x Breaking Bad // 5 x 7.00 = £35.00  |
        | Total: £45.00                          |
