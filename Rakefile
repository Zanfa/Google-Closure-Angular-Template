require 'fileutils'

desc 'Run JSHint to find style problems'
task :lint do
  puts 'Linting...'
  lint_result = `jshint src/js/**/*.js src/js/*.js`

  if lint_result.empty?
    puts 'Linting Successful'
  else
    puts lint_result
    puts 'ERROR: Linting Failed'
    exit
  end
end

namespace :closure do
  task :deps do
    `python lib/closure-library/closure/bin/build/depswriter.py \
      --root_with_prefix="src ../../../../src" \
      --output_file=gen/deps.js`
  end
end

namespace :test do

  desc 'Run integration tests'
  task :default => [:lint] do

    puts `protractor test/conf.js`

  end

  desc 'Start unit tests with file watchers enabled'
  task :unit => [:lint] do

    sh 'karma start test/karma.conf.js'

  end

end

desc 'Generate production-ready source'
task :build => [:lint, 'closure:deps'] do

  unless ENV.has_key?('CLOSURE_PATH')
    puts 'ERROR: CLOSURE_PATH must be defined and point to Closure Compiler'
    exit
  end

  puts 'Building...'
  puts 'Compiling Javascript'

  build_result = `python lib/closure-library/closure/bin/build/closurebuilder.py \
    --root=lib/closure-library/ \
    --root=src/ \
    --namespace=app \
    --output_mode=compiled \
    --output_file=build/app.js \
    --compiler_jar=$CLOSURE_PATH/build/compiler.jar \
    -f "--compilation_level=ADVANCED_OPTIMIZATIONS" \
    -f "--externs=externs/angular.externs.js" \
    -f "--output_wrapper='use strict'; %output%"`

  puts 'Copying templates'

  dest = 'build/templates'
  FileUtils.mkdir_p(dest)

  Dir.glob('templates/*.html').each do |file|
    FileUtils.copy_file(file, File.join(dest, File.basename(file)))
  end

  puts 'Building Successful'

end

task :default => [:test, :build]