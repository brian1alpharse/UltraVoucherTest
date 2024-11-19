SELECT 
    c.id,
    c.name,
    p.name AS parent_name
FROM 
    person c
LEFT JOIN 
    person p
ON 
    c.parent_id = p.id;