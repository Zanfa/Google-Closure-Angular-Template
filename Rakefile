
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

desc 'Run tests on uncompiled sources'
task :test => [:lint, :deps] do
  puts 'Testing...'
end

desc 'Generate production-ready source'
task :build => [:lint, 'closure:deps'] do

  unless ENV.has_key?('CLOSURE_PATH')
    puts 'ERROR: CLOSURE_PATH must be defined and point to Closure Compiler'
    exit
  end

  puts 'Building...'

  build_result = `python lib/closure-library/closure/bin/build/closurebuilder.py \
    --root=lib/closure-library/ \
    --root=src/ \
    --namespace=app \
    --output_mode=compiled \
    --output_file=build/app.js \
    --compiler_jar=$CLOSURE_PATH/build/compiler.jar \
    -f "--compilation_level=ADVANCED_OPTIMIZATIONS" \
    -f "--output_wrapper='use strict'; %output%"`

  puts 'Building Successful'

end

task :default => [:test, :build]