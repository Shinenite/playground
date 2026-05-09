---
description: documentation of the cocktail of scripts I use to keep formatting of the source material that I work with
draft: false
tags:
  - adobe/indesign
created: 2026-05-09
---
# Intro blabbing

The first issue a book designer faces with every new project: you have the content and it is formatted how it is supposed to be. How do you get it into InDesign without losing it all?

I’ve done it all. Manually, through Find/Change, but none of it feels like it really catches EVERYTHING.

You could argue of course that not everything /needs/ to be caught, but I like to know at least as a baseline. Still, as  I’ve been deep at work for [[Tenna Project]], I found myself with a long manuscript draft to work, and after pulling some hairs out, I finally went and made a folder in my script list, called, *Style Prep*. Below you’lll find what it includes and how it is used!

# What Scripts are included in *Style Prep*?

## Style Characters 

by William Campbell  
Download [here](https://www.marspremedia.com/software/indesign/style-characters)

It is paid, yes, but SO worth the money. I used the trial for now, but I immediately knew I had to grab it. 

What it does is basically do all the tedious find/change work and does it for you on all the common character styles, such as Bold, Italic, Superscript, and combinations of the two. I love it.

## Auto Create P and C styles

by Thomas Silkjær  
Download [here](https://kasyan.ho.ua/downloads/all/auto_create_p_c_styles.zip) (sourced from [Kasyan’s personal website](https://kasyan.ho.ua/scripts_by_categories.html))

Very mysterious one, as it has basically no documentation I’ve found. But when you run it, it basically just tracks all the local overrides and makes them into styles. It can be finnicky.

## TablesToText

by narthur  
Download [here](https://gist.github.com/narthur/e7ce4da9083f96110197)

Ideally I’d like something that can convert the tables, then convert them back, but well. It’ll do. Tables in InDesign still scare me, honestly.

# Documentation of use

## 1. Importing the content file

I import the docx file and preserve all formatting. It usually imports in an absolute mess, but hey. I’m here to fix it.
- These settings depend on the project, but I do usually try to keep all elements, even tables.
- I do often check to remove the page breaks, though.

This creates imported Word Styles, but unless your content source is genuinely well formatted, I don’t often find this useful.

A lot of times the document imports with missing fonts. I fix these, though try to keep to the original style as much as possible.

Here is also where you can run your preferred GREP Find/Changes, such as to remove returns, etc.

## 2. Script clean-up

First, I run [[InDesign workflow for keeping formatting#Style Characters]], which creates the base styles that need to be kept.

Second, I run the [[InDesign workflow for keeping formatting#Auto Create P and C styles]] script.

> [!info] Info
> The Auto Create Style script DOES NOT seem to work on text in Tables. As such I use [[InDesign workflow for keeping formatting#TablesToText]] to convert them to text if applicable

> [!warning] Warning
> As there is little documentation and it seems somewhat of an older script, it can be a bit temperamental. I’ve found it doesn’t like it when 
> - there’s missing fonts, so that is why in the import I make sure to fix any missing ones, 
> - there are styles named AutoStyle already (so, you’ve run it before) (I use [GREP Batch Rename Styles](https://payhip.com/b/Vr1gs) to fix this)
>
>This list will be updated in the future if applicable!

## 3. The Manual Work

At this point, you should have:
- Word Imported Styles
- Character styles named for Bold/Italic/etc. (whatever is found)
- Many styles called “AutoStyle” numbered in order, both for Paragraphs and Characters.

### The Word Imported Styles

Unless there are Tables in the document, the Normal style that usually gets imported I usually just remove. If there are, I leave it for last.

### Character Styles for Bold/Italic/etc.

You can leave these be, but keep an eye on them when cleaning up the AutoStyles.

### AutoStyles

Here’s where most of the work begins.
#### Paragraph styles 
I like to use [AppliedParagraphStyle](https://creativepro.com/downloads/appliedParagraphStyle.zip) to get an overview for which PARAGRAPH AutoStyles are what, and then I go through each of them and rename them to what they are needed, merge them as needed, set my Based On structure, and sometimes fix them as needed. Once most are solved, I move to Find/Change for the few that are still missing.

> [!warning] Warning
> I’ve noticed sometimes in paragraphs that start with, for example, text in Bold, it tends to think that the entire paragraph should be bold. Keep an eye out for those and use the Character Styles script style characters as the true sign of what needs to be Bolded!

#### Character Styles

Here you just have to use Find/Change to go through them all, unfortunately. Can somebody make an AppliedParagraphStyle but for Character Styles, please? 

I’ve found that a lot of times these are just overrides that will be replaced once I begin the actual typesetting and formatting though, but it is nice to have a list, either way!

# 4. Wrapping up (or rather, beginning)

Once I’ve named all the AutoStyles to their proper descriptors, it’s just time to format each of them to their specific looks, create new ones as needed, etc. Obviously, as helpful as these scripts are for the initial set-up of the document, there is still lots of actual formatting work to do afterwards!

This is often where I get rid of the Word imported styles, if any, as well.

Finally, I like to check the overall structure with the [Show Based On]([http://in-tools.com/products/scripts/](http://in-tools.com/article/scripts-blog/show-paragraph-based-on-script/)) script, just so that I know all is correctly linked up.
