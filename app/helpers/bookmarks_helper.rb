module BookmarksHelper
	def show_rating_stars(rating)
		res=''
		rating.times do |number|
			res+='*'
		end
		res
	end

	def random_page
		bookmarks = current_user.bookmarks
		noBookmarks = current_user.bookmarks.count
		bookmarks[rand(noBookmarks) - 1].url unless noBookmarks == 0
	end

	def group_name_generator
		n = "Group"
		name=""
		id = 1
		while name == "" do
			if Group.find_by_name(n + id.to_s) == nil
				name = n + id.to_s
			else
				id += 1
			end
		end
		name
	end
end
