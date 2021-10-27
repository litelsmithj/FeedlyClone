
class Feed < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :layout, :sort, presence: true
    validates :layout, inclusion: { in: %w(title-only magazine cards article), message: "%{value} is not a valid layout" }
    validates :sort, inclusion: { in: %w(most-popular popular+latest latest oldest), message: "%{value} is not a valid sort" }

    after_initialize :set_defaults

    def set_defaults
        self.layout ||= 'title-only'
        self.sort ||= 'most-popular'
    end
end