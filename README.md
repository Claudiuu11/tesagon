# tesagon
Instalare Drupal 9 ddev

1. Cd proiect și ddev config --project-type=drupal9 --docroot=web --create-docroot
2. Ddev start
3. ddev composer create "Drupal/recommended-project:^9"
4. Ddev composer require drush/drush
5. Ddev drush site:install -y
6. ddev drush uli
7. Ddev launch


Instalare Drupal 9 adev cu Gîț clone

1. Git clone git project
2. Cd proiect
3. ddev composer install
4. Ddev launch
