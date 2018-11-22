---
title: "Dealing with unique indexes in FactoryGirl"
date: 2017-04-06T11:16:54.163Z
draft: false
aliases:
  - "/dealing-with-unique-indexes-in-factorygirl"
---
I'm working on an app that has multiple currencies defined as database models which look like this:

```ruby
create_table :currencies do |t|
  t.string :code, null: false, unique: true
end
```

The problem is, these match up to currencies in [https://github.com/RubyMoney/money](https://github.com/RubyMoney/money). Because these currencies need to link up, I can't just use a `sequence` in `FactoryGirl`.

I could register a new currency every time in `money`, but some of my production code actually relies upon currencies being certain values.

A way around this would be to cache currencies and reused them kind of like:

```ruby
def gbp
  @gbp ||= create(:currency, :gbp)
end
```

This is kind of ugly, and would need to be reset for each test run because our database gets cleaned after every test.

It turns out there's a better way with `initialize_with` in `FactoryGirl`:

```ruby
FactoryGirl.define do
  factory :currency do
    initialize_with do
      Currency.where(
        code: code
      ).first_or_initialize
    end
  end
end
```

This ensures that when you `create(:currency)` it will only be created once (per test run) for each currency code.                                                                                                                                                                  