# -*- encoding: utf-8 -*-
# stub: glynn 1.2.1 ruby lib

Gem::Specification.new do |s|
  s.name = "glynn".freeze
  s.version = "1.2.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Damien MATHIEU".freeze]
  s.date = "2015-11-10"
  s.description = "Deploy a jekyll weblog through ftp".freeze
  s.email = "42@dmathieu.com".freeze
  s.executables = ["glynn".freeze]
  s.files = ["bin/glynn".freeze]
  s.homepage = "https://github.com/dmathieu/glynn".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.6.13".freeze
  s.summary = "Deploy a jekyll weblog through ftp".freeze

  s.installed_by_version = "2.6.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
      s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<jekyll>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<double-bag-ftps>.freeze, ["~> 0.1.2"])
    else
      s.add_dependency(%q<bundler>.freeze, [">= 0"])
      s.add_dependency(%q<minitest>.freeze, [">= 0"])
      s.add_dependency(%q<jekyll>.freeze, [">= 0"])
      s.add_dependency(%q<double-bag-ftps>.freeze, ["~> 0.1.2"])
    end
  else
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<minitest>.freeze, [">= 0"])
    s.add_dependency(%q<jekyll>.freeze, [">= 0"])
    s.add_dependency(%q<double-bag-ftps>.freeze, ["~> 0.1.2"])
  end
end
