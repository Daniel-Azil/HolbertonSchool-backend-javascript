#!/bin/bash

# Define commit messages as an associative array, mapping filenames to messages
declare -A commit_messages
commit_messages=(
    ["0x01-ES6_promise/1-promise.js"]="Add basic Promise handling in ES6 Promise folder"
    ["0x01-ES6_promise/2-then.js"]="Add chaining with .then() in Promise example"
    ["0x01-ES6_promise/3-all.js"]="Implement Promise.all example for handling multiple Promises"
    ["0x01-ES6_promise/4-user-promise.js"]="Return user details in a resolved Promise"
    ["0x01-ES6_promise/5-photo-reject.js"]="Introduce rejection handling in Promises"
    ["0x01-ES6_promise/6-final-user.js"]="Complete promise flow for user information"
    ["0x01-ES6_promise/7-load_balancer.js"]="Set up a basic load balancer with Promise handling"
    ["0x01-ES6_promise/8-try.js"]="Include try-catch with Promises (try 1)"
    ["0x01-ES6_promise/9-try.js"]="Include try-catch with Promises (try 2)"
    ["0x01-ES6_promise/100-await.js"]="Utilize async/await syntax for a Promise example"
    ["0x01-ES6_promise/testfolder/"]="Add test folder for ES6 Promise testing"

    # Add additional mappings for 0x02-ES6_classes
    ["0x02-ES6_classes/1-make_classrooms.js"]="Define Classroom creation"
    ["0x02-ES6_classes/2-hbtn_course.js"]="Initialize basic course class"
    ["0x02-ES6_classes/3-currency.js"]="Set up currency class with getters and setters"
    ["0x02-ES6_classes/4-pricing.js"]="Define pricing class using currency"
    ["0x02-ES6_classes/5-building.js"]="Introduce building superclass"
    ["0x02-ES6_classes/6-sky_high.js"]="Implement SkyHighBuilding with building inheritance"
    ["0x02-ES6_classes/7-airport.js"]="Add Airport class with detailed attributes"
    ["0x02-ES6_classes/8-hbtn_class.js"]="Implement additional class attributes"
    ["0x02-ES6_classes/9-hoisting.js"]="Define example illustrating hoisting in classes"
    ["0x02-ES6_classes/10-car.js"]="Add car class example"
    ["0x02-ES6_classes/100-evcar.js"]="Add EV car class with inheritance"
    ["0x02-ES6_classes/test/"]="Add test folder for ES6 classes"

    # Add additional mappings for 0x03-ES6_data_manipulation
    ["0x03-ES6_data_manipulation/1-get_list_student_ids.js"]="Fetch student IDs from list"
    ["0x03-ES6_data_manipulation/2-get_students_by_loc.js"]="Filter students by location"
    ["0x03-ES6_data_manipulation/3-get_ids_sum.js"]="Sum student IDs in list"
    ["0x03-ES6_data_manipulation/4-update_grade_by_city.js"]="Update student grades by city"
    ["0x03-ES6_data_manipulation/5-typed_arrays.js"]="Implement typed arrays for efficient storage"
    ["0x03-ES6_data_manipulation/6-set.js"]="Use Set for unique data collection"
    ["0x03-ES6_data_manipulation/7-has_array_values.js"]="Check array values in a Set"
    ["0x03-ES6_data_manipulation/8-clean_set.js"]="Create a cleaner Set interface"
    ["0x03-ES6_data_manipulation/9-groceries_list.js"]="Generate a sample groceries list"
    ["0x03-ES6_data_manipulation/10-update_uniq_items.js"]="Update items uniquely"
    ["0x03-ES6_data_manipulation/Tests/"]="Add tests folder for ES6 data manipulation functions"

    # Add mappings for TypeScript tasks
    ["0x04-TypeScript/task_0/"]="Add initial TypeScript task 0"
    ["0x04-TypeScript/task_1/"]="Add initial TypeScript task 1"
    ["0x04-TypeScript/task_2/"]="Add initial TypeScript task 2"
    ["0x04-TypeScript/task_3/"]="Add initial TypeScript task 3"
    ["0x04-TypeScript/task_4/"]="Add initial TypeScript task 4"
    ["0x04-TypeScript/task_5/"]="Add initial TypeScript task 5"

    # Add mappings for Node.js server files
    ["0x05-Node_JS_basic/full_server/controllers/StudentsController.js~"]="Add basic StudentsController.js for Node.js server"
    ["0x05-Node_JS_basic/full_server/routes/index.js~"]="Add route index.js for Node.js server"
    ["0x05-Node_JS_basic/full_server/server.js~"]="Add server.js setup for Node.js server"
    ["0x05-Node_JS_basic/full_server/utils.js~"]="Add utils.js for Node.js server utilities"

    # Miscellaneous files
    ["auto_commit.sh"]="Add auto-commit shell script"
    ["commit_messages.txt"]="Add commit messages file"
)

# Set the base date to roughly 5 months ago from today
base_date=$(date -d "5 months ago" +%Y-%m-%d)

# Iterate over each untracked file and commit individually
index=0
for file in "${!commit_messages[@]}"; do
    if [[ -f $file || -d $file ]]; then
        # Increment date slightly for each file to simulate individual commits
        commit_date=$(date -d "$base_date +$index days" +"%Y-%m-%dT12:00:00")

        git add "$file"
        GIT_COMMITTER_DATE="$commit_date" git commit --date="$commit_date" -m "${commit_messages[$file]}"

        # Increment the index for the next commit's date
        index=$((index + 1))
    else
        echo "Warning: $file does not exist and cannot be committed."
    fi
done

echo "All specified untracked files have been staged and committed with backdated timestamps."
